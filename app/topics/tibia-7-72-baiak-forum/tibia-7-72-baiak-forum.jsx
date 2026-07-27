import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-forum');
}

export default function Tibia772BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-forum" />;
}
