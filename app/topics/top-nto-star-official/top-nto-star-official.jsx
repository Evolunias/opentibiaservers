import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-official');
}

export default function TopNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-official" />;
}
