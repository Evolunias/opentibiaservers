import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-forum');
}

export default function LowrateSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-forum" />;
}
