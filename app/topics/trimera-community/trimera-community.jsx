import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-community');
}

export default function TrimeraCommunityKeywordPage() {
  return <StaticKeywordPage slug="trimera-community" />;
}
