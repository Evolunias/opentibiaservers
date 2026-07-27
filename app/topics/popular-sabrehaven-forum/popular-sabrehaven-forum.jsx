import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-forum');
}

export default function PopularSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-forum" />;
}
