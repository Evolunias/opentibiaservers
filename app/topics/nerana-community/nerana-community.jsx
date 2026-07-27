import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-community');
}

export default function NeranaCommunityKeywordPage() {
  return <StaticKeywordPage slug="nerana-community" />;
}
