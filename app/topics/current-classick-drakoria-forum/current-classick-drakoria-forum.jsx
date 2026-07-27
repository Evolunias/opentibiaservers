import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-forum');
}

export default function CurrentClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-forum" />;
}
