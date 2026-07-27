import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-germany');
}

export default function CalmeraOtRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-germany" />;
}
