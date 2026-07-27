import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-fresh-start-server');
}

export default function Tibiame854FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-fresh-start-server" />;
}
