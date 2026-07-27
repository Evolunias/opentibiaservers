import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-argentina');
}

export default function EvoForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-argentina" />;
}
