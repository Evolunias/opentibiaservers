import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-forum');
}

export default function NewTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-forum" />;
}
