import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-latin-america');
}

export default function BaiakForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-latin-america" />;
}
