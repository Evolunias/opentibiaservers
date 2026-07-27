import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-ot');
}

export default function ActiveShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-ot" />;
}
