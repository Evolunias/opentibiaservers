import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-germany');
}

export default function ShadowcoresNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-germany" />;
}
