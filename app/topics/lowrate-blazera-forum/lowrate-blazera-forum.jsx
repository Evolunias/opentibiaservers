import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-forum');
}

export default function LowrateBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-forum" />;
}
