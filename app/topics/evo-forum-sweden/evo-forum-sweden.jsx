import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-sweden');
}

export default function EvoForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-sweden" />;
}
