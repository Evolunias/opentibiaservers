import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-forum');
}

export default function CustomRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-forum" />;
}
