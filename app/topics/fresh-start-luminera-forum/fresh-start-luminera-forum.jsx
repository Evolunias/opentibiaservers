import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-forum');
}

export default function FreshStartLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-forum" />;
}
