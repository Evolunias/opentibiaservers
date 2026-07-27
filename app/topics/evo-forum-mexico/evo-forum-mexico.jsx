import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-mexico');
}

export default function EvoForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-mexico" />;
}
