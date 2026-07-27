import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-forum');
}

export default function TopLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-forum" />;
}
