import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-forum');
}

export default function LowrateRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-forum" />;
}
