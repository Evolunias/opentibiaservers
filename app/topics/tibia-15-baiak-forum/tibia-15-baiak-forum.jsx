import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-forum');
}

export default function Tibia15BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-forum" />;
}
