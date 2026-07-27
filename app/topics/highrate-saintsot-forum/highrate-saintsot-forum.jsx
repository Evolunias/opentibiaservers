import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-forum');
}

export default function HighrateSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-forum" />;
}
