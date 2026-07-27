import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-canada');
}

export default function CalmeraOtRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-canada" />;
}
