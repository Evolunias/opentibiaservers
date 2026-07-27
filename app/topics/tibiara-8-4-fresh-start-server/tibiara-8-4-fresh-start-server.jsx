import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-fresh-start-server');
}

export default function Tibiara84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-fresh-start-server" />;
}
