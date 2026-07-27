import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-fresh-start-server');
}

export default function Tibiame84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-fresh-start-server" />;
}
