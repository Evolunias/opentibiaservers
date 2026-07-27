import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-fresh-start-server');
}

export default function Tibiame14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-fresh-start-server" />;
}
