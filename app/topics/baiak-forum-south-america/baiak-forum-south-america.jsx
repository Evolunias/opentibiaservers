import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-south-america');
}

export default function BaiakForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-south-america" />;
}
