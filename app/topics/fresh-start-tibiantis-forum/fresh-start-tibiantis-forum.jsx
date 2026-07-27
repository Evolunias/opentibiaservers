import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-forum');
}

export default function FreshStartTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-forum" />;
}
