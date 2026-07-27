import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-community');
}

export default function PytheraCommunityKeywordPage() {
  return <StaticKeywordPage slug="pythera-community" />;
}
