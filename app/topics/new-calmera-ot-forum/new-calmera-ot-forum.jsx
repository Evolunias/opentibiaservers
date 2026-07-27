import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-forum');
}

export default function NewCalmeraOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-forum" />;
}
