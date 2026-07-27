import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-forum');
}

export default function TopSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-forum" />;
}
