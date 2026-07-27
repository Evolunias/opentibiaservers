import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-forum');
}

export default function FreshStartMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-forum" />;
}
