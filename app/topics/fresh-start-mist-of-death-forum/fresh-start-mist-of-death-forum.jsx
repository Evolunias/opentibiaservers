import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-forum');
}

export default function FreshStartMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-forum" />;
}
