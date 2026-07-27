import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-forum');
}

export default function ActiveRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-forum" />;
}
