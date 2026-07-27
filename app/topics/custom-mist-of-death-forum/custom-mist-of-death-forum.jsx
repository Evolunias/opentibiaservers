import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-mist-of-death-forum');
}

export default function CustomMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="custom-mist-of-death-forum" />;
}
