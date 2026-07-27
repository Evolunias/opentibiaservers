import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-community');
}

export default function RuberaCommunityKeywordPage() {
  return <StaticKeywordPage slug="rubera-community" />;
}
