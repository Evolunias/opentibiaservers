import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-forum');
}

export default function CurrentKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-forum" />;
}
