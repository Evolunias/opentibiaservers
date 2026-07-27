import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-forum');
}

export default function LowrateRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-forum" />;
}
