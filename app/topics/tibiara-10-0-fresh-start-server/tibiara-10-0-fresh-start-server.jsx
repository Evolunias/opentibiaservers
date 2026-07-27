import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-fresh-start-server');
}

export default function Tibiara100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-fresh-start-server" />;
}
