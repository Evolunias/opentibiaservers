import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-forum');
}

export default function AlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="alastera-forum" />;
}
