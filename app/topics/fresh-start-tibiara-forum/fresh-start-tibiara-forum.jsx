import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-forum');
}

export default function FreshStartTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-forum" />;
}
