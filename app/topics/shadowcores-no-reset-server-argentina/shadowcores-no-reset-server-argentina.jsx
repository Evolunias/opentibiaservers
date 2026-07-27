import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-argentina');
}

export default function ShadowcoresNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-argentina" />;
}
