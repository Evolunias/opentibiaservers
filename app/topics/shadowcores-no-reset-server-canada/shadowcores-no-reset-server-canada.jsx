import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-canada');
}

export default function ShadowcoresNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-canada" />;
}
