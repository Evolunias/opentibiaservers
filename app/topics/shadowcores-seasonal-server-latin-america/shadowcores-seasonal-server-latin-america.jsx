import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-latin-america');
}

export default function ShadowcoresSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-latin-america" />;
}
