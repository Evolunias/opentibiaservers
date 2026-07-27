import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-forum');
}

export default function HighrateNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-forum" />;
}
