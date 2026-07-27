import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-ot');
}

export default function NoResetShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-ot" />;
}
