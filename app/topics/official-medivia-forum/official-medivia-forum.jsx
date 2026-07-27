import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-forum');
}

export default function OfficialMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-forum" />;
}
