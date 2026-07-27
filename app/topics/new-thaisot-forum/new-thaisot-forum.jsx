import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-forum');
}

export default function NewThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-forum" />;
}
