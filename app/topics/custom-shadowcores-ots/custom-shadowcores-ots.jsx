import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-ots');
}

export default function CustomShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-ots" />;
}
