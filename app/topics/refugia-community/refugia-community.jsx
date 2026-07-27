import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-community');
}

export default function RefugiaCommunityKeywordPage() {
  return <StaticKeywordPage slug="refugia-community" />;
}
