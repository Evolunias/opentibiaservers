import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-latin-america');
}

export default function CalmeraOtRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-latin-america" />;
}
