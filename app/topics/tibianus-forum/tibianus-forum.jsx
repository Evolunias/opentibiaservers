import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-forum');
}

export default function TibianusForumKeywordPage() {
  return <StaticKeywordPage slug="tibianus-forum" />;
}
