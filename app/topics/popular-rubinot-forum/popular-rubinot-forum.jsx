import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-forum');
}

export default function PopularRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-forum" />;
}
