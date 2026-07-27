import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-forum');
}

export default function FreshStartMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-forum" />;
}
