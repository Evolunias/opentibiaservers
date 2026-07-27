import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-community');
}

export default function ShiveraCommunityKeywordPage() {
  return <StaticKeywordPage slug="shivera-community" />;
}
