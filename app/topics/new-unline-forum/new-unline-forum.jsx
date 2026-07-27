import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-forum');
}

export default function NewUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="new-unline-forum" />;
}
