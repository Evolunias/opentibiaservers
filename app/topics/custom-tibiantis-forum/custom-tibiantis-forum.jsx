import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-forum');
}

export default function CustomTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-forum" />;
}
