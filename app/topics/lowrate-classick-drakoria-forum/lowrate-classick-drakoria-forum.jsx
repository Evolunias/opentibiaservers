import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-forum');
}

export default function LowrateClassickDrakoriaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-forum" />;
}
