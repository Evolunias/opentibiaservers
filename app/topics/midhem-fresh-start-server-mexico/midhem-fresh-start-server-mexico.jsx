import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-mexico');
}

export default function MidhemFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-mexico" />;
}
