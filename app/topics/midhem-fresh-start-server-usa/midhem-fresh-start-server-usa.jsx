import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-usa');
}

export default function MidhemFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-usa" />;
}
