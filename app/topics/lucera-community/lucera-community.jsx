import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-community');
}

export default function LuceraCommunityKeywordPage() {
  return <StaticKeywordPage slug="lucera-community" />;
}
