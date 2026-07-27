import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-forum');
}

export default function NewOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-forum" />;
}
