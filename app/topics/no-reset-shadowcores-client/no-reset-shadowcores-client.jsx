import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-client');
}

export default function NoResetShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-client" />;
}
