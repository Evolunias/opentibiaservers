import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-forum');
}

export default function NewKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-forum" />;
}
