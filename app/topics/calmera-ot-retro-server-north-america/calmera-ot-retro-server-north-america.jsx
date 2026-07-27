import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-north-america');
}

export default function CalmeraOtRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-north-america" />;
}
