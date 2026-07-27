import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-forum');
}

export default function FreshStartUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-forum" />;
}
