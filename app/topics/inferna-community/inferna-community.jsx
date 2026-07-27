import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-community');
}

export default function InfernaCommunityKeywordPage() {
  return <StaticKeywordPage slug="inferna-community" />;
}
