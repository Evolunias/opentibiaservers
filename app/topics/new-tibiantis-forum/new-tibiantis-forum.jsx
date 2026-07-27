import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-forum');
}

export default function NewTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-forum" />;
}
