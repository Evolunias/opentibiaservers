import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-forum');
}

export default function TopMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-forum" />;
}
