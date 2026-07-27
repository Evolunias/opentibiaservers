import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-france');
}

export default function ShadowcoresNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-france" />;
}
