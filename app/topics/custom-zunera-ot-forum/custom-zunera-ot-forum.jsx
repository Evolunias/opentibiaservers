import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-forum');
}

export default function CustomZuneraOtForumKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-forum" />;
}
