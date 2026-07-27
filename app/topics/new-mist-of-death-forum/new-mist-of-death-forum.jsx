import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-forum');
}

export default function NewMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-forum" />;
}
