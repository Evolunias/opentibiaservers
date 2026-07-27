import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-non-pvp-server-latin-america');
}

export default function ShadowcoresNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-non-pvp-server-latin-america" />;
}
