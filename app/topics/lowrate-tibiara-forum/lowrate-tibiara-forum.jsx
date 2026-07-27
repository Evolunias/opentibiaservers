import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-forum');
}

export default function LowrateTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-forum" />;
}
