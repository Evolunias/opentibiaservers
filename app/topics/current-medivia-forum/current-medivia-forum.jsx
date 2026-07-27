import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-forum');
}

export default function CurrentMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-forum" />;
}
