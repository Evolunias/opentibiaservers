import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-argentina');
}

export default function MidhemFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-argentina" />;
}
