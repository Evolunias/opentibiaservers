import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-forum');
}

export default function MidhemForumKeywordPage() {
  return <StaticKeywordPage slug="midhem-forum" />;
}
