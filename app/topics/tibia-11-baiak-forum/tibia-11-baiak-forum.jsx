import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-forum');
}

export default function Tibia11BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-forum" />;
}
