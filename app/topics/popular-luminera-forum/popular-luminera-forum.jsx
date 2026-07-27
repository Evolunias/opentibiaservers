import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-forum');
}

export default function PopularLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-forum" />;
}
