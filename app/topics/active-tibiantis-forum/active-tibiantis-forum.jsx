import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-forum');
}

export default function ActiveTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-forum" />;
}
