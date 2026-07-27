import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-poland');
}

export default function EvoForumPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-poland" />;
}
