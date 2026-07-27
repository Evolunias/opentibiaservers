import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-ot');
}

export default function LowrateShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-ot" />;
}
