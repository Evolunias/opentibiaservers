import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-ot-server');
}

export default function NoResetShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-ot-server" />;
}
