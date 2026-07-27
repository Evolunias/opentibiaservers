import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-0-fresh-start-server');
}

export default function Tibiara80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-0-fresh-start-server" />;
}
