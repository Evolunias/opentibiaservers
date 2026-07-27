import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-ots');
}

export default function ShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-ots" />;
}
