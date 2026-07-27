import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-forum');
}

export default function MistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-forum" />;
}
