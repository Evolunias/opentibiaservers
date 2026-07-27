import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-forum');
}

export default function CurrentTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-forum" />;
}
