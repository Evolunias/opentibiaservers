import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-community');
}

export default function FideraCommunityKeywordPage() {
  return <StaticKeywordPage slug="fidera-community" />;
}
