import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-forum');
}

export default function BestMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-forum" />;
}
