import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-forum');
}

export default function Tibia100BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-forum" />;
}
