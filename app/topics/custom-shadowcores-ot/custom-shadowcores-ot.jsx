import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-ot');
}

export default function CustomShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-ot" />;
}
