import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-usa');
}

export default function EvoForumUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-usa" />;
}
