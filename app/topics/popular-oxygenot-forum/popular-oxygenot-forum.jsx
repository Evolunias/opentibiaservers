import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-forum');
}

export default function PopularOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-forum" />;
}
