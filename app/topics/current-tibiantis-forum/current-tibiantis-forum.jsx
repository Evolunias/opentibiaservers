import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-forum');
}

export default function CurrentTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-forum" />;
}
