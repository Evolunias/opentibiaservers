import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-forum');
}

export default function CurrentZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-forum" />;
}
