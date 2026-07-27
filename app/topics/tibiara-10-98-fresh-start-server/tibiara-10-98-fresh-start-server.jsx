import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-fresh-start-server');
}

export default function Tibiara1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-fresh-start-server" />;
}
