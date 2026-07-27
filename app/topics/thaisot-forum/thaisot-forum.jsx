import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-forum');
}

export default function ThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="thaisot-forum" />;
}
