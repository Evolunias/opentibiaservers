import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-forum');
}

export default function LumineraForumKeywordPage() {
  return <StaticKeywordPage slug="luminera-forum" />;
}
