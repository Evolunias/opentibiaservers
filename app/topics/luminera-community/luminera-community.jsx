import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-community');
}

export default function LumineraCommunityKeywordPage() {
  return <StaticKeywordPage slug="luminera-community" />;
}
