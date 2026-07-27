import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-mexico');
}

export default function CalmeraOtRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-mexico" />;
}
