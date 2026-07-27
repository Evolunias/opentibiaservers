import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-forum');
}

export default function BestTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-forum" />;
}
