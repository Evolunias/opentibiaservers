import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-community');
}

export default function IsaraCommunityKeywordPage() {
  return <StaticKeywordPage slug="isara-community" />;
}
