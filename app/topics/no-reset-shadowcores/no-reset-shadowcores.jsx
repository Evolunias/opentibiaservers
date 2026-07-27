import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores');
}

export default function NoResetShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores" />;
}
