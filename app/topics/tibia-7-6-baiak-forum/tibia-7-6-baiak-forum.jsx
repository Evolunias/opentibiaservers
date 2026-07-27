import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-forum');
}

export default function Tibia76BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-forum" />;
}
