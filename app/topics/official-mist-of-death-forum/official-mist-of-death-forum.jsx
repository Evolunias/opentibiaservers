import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-forum');
}

export default function OfficialMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-forum" />;
}
