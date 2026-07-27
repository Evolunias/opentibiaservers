import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-72-fresh-start-server');
}

export default function Tibiara772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-72-fresh-start-server" />;
}
