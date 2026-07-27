import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-forum');
}

export default function Tibia74ServerForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-forum" />;
}
