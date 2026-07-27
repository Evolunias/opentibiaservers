import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-forum');
}

export default function CustomAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-forum" />;
}
