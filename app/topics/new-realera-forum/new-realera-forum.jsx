import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-forum');
}

export default function NewRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="new-realera-forum" />;
}
