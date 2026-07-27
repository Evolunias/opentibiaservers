import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-forum');
}

export default function NewZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-forum" />;
}
