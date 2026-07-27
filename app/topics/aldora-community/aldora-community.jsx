import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-community');
}

export default function AldoraCommunityKeywordPage() {
  return <StaticKeywordPage slug="aldora-community" />;
}
