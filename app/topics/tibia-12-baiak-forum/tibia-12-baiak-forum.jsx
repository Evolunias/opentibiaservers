import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-forum');
}

export default function Tibia12BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-forum" />;
}
