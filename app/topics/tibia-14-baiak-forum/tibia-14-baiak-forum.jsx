import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-forum');
}

export default function Tibia14BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-forum" />;
}
