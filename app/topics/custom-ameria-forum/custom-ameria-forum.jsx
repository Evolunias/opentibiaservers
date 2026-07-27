import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-forum');
}

export default function CustomAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-forum" />;
}
