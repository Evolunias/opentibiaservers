import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-forum');
}

export default function TopImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-forum" />;
}
