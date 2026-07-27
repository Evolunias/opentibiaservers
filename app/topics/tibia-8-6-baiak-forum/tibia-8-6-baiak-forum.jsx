import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-forum');
}

export default function Tibia86BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-forum" />;
}
