import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-ots');
}

export default function NoResetShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-ots" />;
}
