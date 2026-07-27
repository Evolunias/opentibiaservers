import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-world');
}

export default function PaceraWorldKeywordPage() {
  return <StaticKeywordPage slug="pacera-world" />;
}
