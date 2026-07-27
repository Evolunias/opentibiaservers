import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-forum');
}

export default function CustomMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-forum" />;
}
