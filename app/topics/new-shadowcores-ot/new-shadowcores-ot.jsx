import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-ot');
}

export default function NewShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-ot" />;
}
