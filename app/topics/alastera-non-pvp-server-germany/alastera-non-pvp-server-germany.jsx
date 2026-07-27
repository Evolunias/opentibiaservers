import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-germany');
}

export default function AlasteraNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-germany" />;
}
