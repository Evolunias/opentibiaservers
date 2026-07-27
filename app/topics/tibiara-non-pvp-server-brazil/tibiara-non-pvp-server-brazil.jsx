import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-brazil');
}

export default function TibiaraNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-brazil" />;
}
