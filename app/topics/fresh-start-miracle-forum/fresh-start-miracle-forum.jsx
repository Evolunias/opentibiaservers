import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-forum');
}

export default function FreshStartMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-forum" />;
}
