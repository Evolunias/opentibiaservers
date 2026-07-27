import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-france');
}

export default function CalmeraOtRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-france" />;
}
