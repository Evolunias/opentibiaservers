import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-forum');
}

export default function LowrateCanobForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-forum" />;
}
