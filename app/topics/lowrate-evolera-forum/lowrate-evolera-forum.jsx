import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-forum');
}

export default function LowrateEvoleraForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-forum" />;
}
