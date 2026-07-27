import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-forum');
}

export default function LowrateLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-forum" />;
}
