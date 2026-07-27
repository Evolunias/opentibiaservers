import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-forum');
}

export default function HighrateLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-forum" />;
}
