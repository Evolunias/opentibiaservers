import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-community');
}

export default function CalmeraCommunityKeywordPage() {
  return <StaticKeywordPage slug="calmera-community" />;
}
