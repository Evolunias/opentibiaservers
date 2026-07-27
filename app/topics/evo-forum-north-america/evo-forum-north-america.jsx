import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-north-america');
}

export default function EvoForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-north-america" />;
}
