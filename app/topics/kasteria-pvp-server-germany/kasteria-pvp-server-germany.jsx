import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-germany');
}

export default function KasteriaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-germany" />;
}
