import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-ots');
}

export default function NewShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-ots" />;
}
