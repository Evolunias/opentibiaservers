import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-fresh-start-server');
}

export default function Tibiame76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-fresh-start-server" />;
}
