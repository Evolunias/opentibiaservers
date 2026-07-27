import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-forum');
}

export default function BestThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-forum" />;
}
