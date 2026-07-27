import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-forum');
}

export default function BestMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-forum" />;
}
