import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-ot');
}

export default function ShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-ot" />;
}
