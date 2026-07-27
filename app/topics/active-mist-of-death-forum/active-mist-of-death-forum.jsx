import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-forum');
}

export default function ActiveMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-forum" />;
}
