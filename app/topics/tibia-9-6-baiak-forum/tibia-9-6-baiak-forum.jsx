import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-forum');
}

export default function Tibia96BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-forum" />;
}
