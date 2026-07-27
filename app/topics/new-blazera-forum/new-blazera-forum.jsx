import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-forum');
}

export default function NewBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-forum" />;
}
