import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-fresh-start-server');
}

export default function Tibiame11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-fresh-start-server" />;
}
