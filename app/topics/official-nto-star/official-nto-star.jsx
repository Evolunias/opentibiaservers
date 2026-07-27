import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star');
}

export default function OfficialNtoStarKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star" />;
}
