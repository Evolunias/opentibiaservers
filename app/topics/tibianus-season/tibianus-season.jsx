import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-season');
}

export default function TibianusSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibianus-season" />;
}
