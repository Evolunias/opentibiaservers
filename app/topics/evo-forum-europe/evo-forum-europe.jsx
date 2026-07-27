import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-europe');
}

export default function EvoForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-europe" />;
}
