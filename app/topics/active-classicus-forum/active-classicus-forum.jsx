import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-forum');
}

export default function ActiveClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-forum" />;
}
