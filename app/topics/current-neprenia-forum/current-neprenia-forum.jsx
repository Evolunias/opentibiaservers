import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-forum');
}

export default function CurrentNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-forum" />;
}
