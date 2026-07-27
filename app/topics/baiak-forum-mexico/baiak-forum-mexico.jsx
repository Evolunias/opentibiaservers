import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-mexico');
}

export default function BaiakForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-mexico" />;
}
