import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-community');
}

export default function ReneraCommunityKeywordPage() {
  return <StaticKeywordPage slug="renera-community" />;
}
