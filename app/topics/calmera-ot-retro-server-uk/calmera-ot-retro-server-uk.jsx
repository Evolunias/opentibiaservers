import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-uk');
}

export default function CalmeraOtRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-uk" />;
}
