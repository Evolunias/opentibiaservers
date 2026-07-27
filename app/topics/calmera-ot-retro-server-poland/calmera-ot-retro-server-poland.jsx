import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-poland');
}

export default function CalmeraOtRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-poland" />;
}
