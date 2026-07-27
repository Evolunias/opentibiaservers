import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-community');
}

export default function LiberaCommunityKeywordPage() {
  return <StaticKeywordPage slug="libera-community" />;
}
