import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-forum');
}

export default function CurrentLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-forum" />;
}
