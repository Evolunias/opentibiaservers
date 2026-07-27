import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-official');
}

export default function OfficialNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-official" />;
}
