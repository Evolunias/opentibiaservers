import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-fresh-start-server');
}

export default function Evolera86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-fresh-start-server" />;
}
