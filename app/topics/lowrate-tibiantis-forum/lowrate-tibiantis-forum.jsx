import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-forum');
}

export default function LowrateTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-forum" />;
}
