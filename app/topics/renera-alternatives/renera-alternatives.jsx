import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-alternatives');
}

export default function ReneraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="renera-alternatives" />;
}
