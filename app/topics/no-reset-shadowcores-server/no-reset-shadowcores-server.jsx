import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-server');
}

export default function NoResetShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-server" />;
}
