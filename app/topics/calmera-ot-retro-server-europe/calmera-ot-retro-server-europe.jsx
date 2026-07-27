import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-europe');
}

export default function CalmeraOtRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-europe" />;
}
