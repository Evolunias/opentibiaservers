import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-fresh-start-server');
}

export default function Tibiara14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-fresh-start-server" />;
}
