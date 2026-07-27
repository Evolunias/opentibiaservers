import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-brazil');
}

export default function EvoForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-brazil" />;
}
