import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-fresh-start-server');
}

export default function Evolera76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-fresh-start-server" />;
}
