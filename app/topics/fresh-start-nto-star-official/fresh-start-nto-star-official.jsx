import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-official');
}

export default function FreshStartNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-official" />;
}
