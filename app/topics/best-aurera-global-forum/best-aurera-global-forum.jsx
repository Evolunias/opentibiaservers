import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-forum');
}

export default function BestAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-forum" />;
}
