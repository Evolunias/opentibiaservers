import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-germany');
}

export default function TibiaraNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-germany" />;
}
