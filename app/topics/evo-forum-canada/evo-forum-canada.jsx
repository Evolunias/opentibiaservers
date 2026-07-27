import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-canada');
}

export default function EvoForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-canada" />;
}
