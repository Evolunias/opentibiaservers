import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-non-pvp-server');
}

export default function Tibiara14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-non-pvp-server" />;
}
