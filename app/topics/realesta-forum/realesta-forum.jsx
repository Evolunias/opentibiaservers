import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-forum');
}

export default function RealestaForumKeywordPage() {
  return <StaticKeywordPage slug="realesta-forum" />;
}
