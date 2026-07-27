import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-forum');
}

export default function LowrateMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-forum" />;
}
