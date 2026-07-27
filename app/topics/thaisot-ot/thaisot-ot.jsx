import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-ot');
}

export default function ThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="thaisot-ot" />;
}
