import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-forum');
}

export default function PopularAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-forum" />;
}
