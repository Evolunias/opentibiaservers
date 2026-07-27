import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-forum');
}

export default function LowrateThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-forum" />;
}
