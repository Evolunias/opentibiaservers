import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-season');
}

export default function OtlandSeasonKeywordPage() {
  return <StaticKeywordPage slug="otland-season" />;
}
