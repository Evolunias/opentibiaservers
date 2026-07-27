import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-wars');
}

export default function PaceraWarsKeywordPage() {
  return <StaticKeywordPage slug="pacera-wars" />;
}
