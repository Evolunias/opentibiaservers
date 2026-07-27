import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-community');
}

export default function VineraCommunityKeywordPage() {
  return <StaticKeywordPage slug="vinera-community" />;
}
