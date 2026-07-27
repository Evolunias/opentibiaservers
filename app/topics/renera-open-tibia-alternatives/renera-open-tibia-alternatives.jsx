import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-open-tibia-alternatives');
}

export default function ReneraOpenTibiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="renera-open-tibia-alternatives" />;
}
