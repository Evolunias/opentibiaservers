import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-germany');
}

export default function EvoForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-germany" />;
}
