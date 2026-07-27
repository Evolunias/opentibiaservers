import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-forum');
}

export default function Tibia13BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-forum" />;
}
