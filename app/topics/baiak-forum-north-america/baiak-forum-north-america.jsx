import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-north-america');
}

export default function BaiakForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-north-america" />;
}
