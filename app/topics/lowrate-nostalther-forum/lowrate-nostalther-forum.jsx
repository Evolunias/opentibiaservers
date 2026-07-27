import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-forum');
}

export default function LowrateNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-forum" />;
}
