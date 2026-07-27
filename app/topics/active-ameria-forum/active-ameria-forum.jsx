import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-forum');
}

export default function ActiveAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-forum" />;
}
