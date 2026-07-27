import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-community');
}

export default function MeneraCommunityKeywordPage() {
  return <StaticKeywordPage slug="menera-community" />;
}
