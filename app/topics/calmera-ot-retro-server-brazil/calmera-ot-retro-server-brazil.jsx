import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-brazil');
}

export default function CalmeraOtRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-brazil" />;
}
