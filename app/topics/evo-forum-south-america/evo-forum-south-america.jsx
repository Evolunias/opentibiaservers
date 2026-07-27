import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-forum-south-america');
}

export default function EvoForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-forum-south-america" />;
}
