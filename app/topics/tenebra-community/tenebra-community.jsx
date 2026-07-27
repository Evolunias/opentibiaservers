import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-community');
}

export default function TenebraCommunityKeywordPage() {
  return <StaticKeywordPage slug="tenebra-community" />;
}
