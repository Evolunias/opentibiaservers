import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-fresh-start-server');
}

export default function Tibiame12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-fresh-start-server" />;
}
