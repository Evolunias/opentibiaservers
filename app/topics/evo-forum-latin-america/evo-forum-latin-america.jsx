import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-latin-america');
}

export default function EvoForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-latin-america" />;
}
