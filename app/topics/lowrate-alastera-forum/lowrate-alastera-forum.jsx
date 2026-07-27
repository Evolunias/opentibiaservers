import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-forum');
}

export default function LowrateAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-forum" />;
}
