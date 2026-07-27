import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-forum');
}

export default function BestMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-forum" />;
}
