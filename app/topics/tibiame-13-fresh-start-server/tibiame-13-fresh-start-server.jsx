import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-fresh-start-server');
}

export default function Tibiame13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-fresh-start-server" />;
}
