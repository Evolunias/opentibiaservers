import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-brazil');
}

export default function TibiaraPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-brazil" />;
}
