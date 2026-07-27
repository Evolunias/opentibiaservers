import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera');
}

export default function PaceraKeywordPage() {
  return <StaticKeywordPage slug="pacera" />;
}
