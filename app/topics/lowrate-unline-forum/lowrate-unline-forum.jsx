import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-forum');
}

export default function LowrateUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-forum" />;
}
