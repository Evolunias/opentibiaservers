import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-forum');
}

export default function HighrateMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-forum" />;
}
