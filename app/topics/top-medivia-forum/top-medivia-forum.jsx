import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-forum');
}

export default function TopMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-forum" />;
}
