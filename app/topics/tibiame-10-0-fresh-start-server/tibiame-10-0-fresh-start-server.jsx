import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-fresh-start-server');
}

export default function Tibiame100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-fresh-start-server" />;
}
