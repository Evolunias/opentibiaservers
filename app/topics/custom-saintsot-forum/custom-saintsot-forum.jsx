import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-forum');
}

export default function CustomSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-forum" />;
}
