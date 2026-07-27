import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-forum');
}

export default function OtservlistForumKeywordPage() {
  return <StaticKeywordPage slug="otservlist-forum" />;
}
