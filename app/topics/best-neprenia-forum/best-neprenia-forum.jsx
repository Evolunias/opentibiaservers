import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-forum');
}

export default function BestNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-forum" />;
}
