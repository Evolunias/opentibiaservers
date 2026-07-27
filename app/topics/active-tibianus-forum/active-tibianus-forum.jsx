import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-forum');
}

export default function ActiveTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-forum" />;
}
