import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-forum');
}

export default function OpenTibiaServersForumKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-forum" />;
}
