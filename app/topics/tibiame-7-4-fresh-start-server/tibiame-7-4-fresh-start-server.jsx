import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-fresh-start-server');
}

export default function Tibiame74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-fresh-start-server" />;
}
