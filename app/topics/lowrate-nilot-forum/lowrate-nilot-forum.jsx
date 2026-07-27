import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-forum');
}

export default function LowrateNilotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-forum" />;
}
