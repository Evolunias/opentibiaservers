import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-forum');
}

export default function TopMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-forum" />;
}
