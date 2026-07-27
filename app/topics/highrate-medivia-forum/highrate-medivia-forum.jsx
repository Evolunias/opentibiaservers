import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-forum');
}

export default function HighrateMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-forum" />;
}
