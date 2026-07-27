import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-no-reset-server-brazil');
}

export default function ShadowcoresNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-no-reset-server-brazil" />;
}
