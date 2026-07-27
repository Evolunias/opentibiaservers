import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-forum');
}

export default function NewAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-forum" />;
}
