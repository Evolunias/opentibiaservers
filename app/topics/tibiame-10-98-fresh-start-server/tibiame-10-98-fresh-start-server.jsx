import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-fresh-start-server');
}

export default function Tibiame1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-fresh-start-server" />;
}
