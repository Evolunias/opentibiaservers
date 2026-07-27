import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-forum');
}

export default function BestTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-forum" />;
}
