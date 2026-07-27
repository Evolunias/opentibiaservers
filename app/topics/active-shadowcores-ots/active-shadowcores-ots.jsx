import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-ots');
}

export default function ActiveShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-ots" />;
}
