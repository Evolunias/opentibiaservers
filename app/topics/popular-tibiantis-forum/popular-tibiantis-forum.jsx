import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-forum');
}

export default function PopularTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-forum" />;
}
