import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-forum');
}

export default function NewSeasonCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-forum" />;
}
