import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-forum');
}

export default function CustomTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-forum" />;
}
