import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-usa');
}

export default function ShadowcoresNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-usa" />;
}
