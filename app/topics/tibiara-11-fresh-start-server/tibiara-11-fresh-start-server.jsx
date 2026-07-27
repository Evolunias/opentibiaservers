import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-11-fresh-start-server');
}

export default function Tibiara11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-11-fresh-start-server" />;
}
