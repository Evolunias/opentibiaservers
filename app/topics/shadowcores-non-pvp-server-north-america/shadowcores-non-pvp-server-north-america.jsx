import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-north-america');
}

export default function ShadowcoresNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-north-america" />;
}
