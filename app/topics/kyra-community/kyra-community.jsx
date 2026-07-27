import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-community');
}

export default function KyraCommunityKeywordPage() {
  return <StaticKeywordPage slug="kyra-community" />;
}
