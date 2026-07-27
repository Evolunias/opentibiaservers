import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-forum');
}

export default function CustomKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-forum" />;
}
