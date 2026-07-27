import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-community');
}

export default function SoleraCommunityKeywordPage() {
  return <StaticKeywordPage slug="solera-community" />;
}
