import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-forum');
}

export default function Tibia84BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-forum" />;
}
