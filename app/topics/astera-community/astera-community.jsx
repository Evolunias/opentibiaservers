import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-community');
}

export default function AsteraCommunityKeywordPage() {
  return <StaticKeywordPage slug="astera-community" />;
}
