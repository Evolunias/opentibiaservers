import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-forum');
}

export default function OpenTibiaServerListForumKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-forum" />;
}
