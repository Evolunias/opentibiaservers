import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-forum');
}

export default function CurrentSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-forum" />;
}
