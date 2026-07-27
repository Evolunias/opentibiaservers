import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-uk');
}

export default function EvoForumUkKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-uk" />;
}
