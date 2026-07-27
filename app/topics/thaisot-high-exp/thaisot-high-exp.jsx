import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp');
}

export default function ThaisotHighExpKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp" />;
}
