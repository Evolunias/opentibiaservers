import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-season');
}

export default function TibijkaSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibijka-season" />;
}
