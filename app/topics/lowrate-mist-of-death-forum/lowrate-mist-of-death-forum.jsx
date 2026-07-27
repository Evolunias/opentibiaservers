import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-mist-of-death-forum');
}

export default function LowrateMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-mist-of-death-forum" />;
}
