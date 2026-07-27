import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-south-america');
}

export default function KasteriaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-south-america" />;
}
