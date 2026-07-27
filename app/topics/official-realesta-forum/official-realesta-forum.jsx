import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-forum');
}

export default function OfficialRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-forum" />;
}
