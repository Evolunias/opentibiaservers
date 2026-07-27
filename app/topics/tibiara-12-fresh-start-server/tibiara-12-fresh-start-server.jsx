import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-fresh-start-server');
}

export default function Tibiara12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-fresh-start-server" />;
}
