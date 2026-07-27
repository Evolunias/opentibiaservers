import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-forum');
}

export default function HighrateSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-forum" />;
}
