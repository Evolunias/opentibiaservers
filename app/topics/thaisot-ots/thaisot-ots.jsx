import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-ots');
}

export default function ThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-ots" />;
}
