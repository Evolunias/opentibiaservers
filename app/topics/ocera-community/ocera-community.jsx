import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-community');
}

export default function OceraCommunityKeywordPage() {
  return <StaticKeywordPage slug="ocera-community" />;
}
