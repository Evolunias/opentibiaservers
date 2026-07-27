import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-forum');
}

export default function NewMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-forum" />;
}
