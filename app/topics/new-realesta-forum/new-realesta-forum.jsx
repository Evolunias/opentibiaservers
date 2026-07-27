import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realesta-forum');
}

export default function NewRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="new-realesta-forum" />;
}
