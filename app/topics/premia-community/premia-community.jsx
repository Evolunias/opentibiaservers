import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-community');
}

export default function PremiaCommunityKeywordPage() {
  return <StaticKeywordPage slug="premia-community" />;
}
