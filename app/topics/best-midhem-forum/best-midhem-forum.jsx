import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-forum');
}

export default function BestMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-forum" />;
}
