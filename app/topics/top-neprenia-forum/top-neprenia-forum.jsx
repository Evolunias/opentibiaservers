import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-forum');
}

export default function TopNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-forum" />;
}
