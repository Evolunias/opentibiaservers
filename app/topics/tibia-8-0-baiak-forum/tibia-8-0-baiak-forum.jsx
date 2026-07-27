import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-forum');
}

export default function Tibia80BaiakForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-forum" />;
}
