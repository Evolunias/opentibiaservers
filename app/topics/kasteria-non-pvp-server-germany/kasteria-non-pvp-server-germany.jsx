import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-germany');
}

export default function KasteriaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-germany" />;
}
