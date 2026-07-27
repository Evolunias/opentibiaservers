import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-forum');
}

export default function NewLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-forum" />;
}
