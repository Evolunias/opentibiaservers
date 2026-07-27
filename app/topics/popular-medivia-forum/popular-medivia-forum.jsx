import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-forum');
}

export default function PopularMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-forum" />;
}
