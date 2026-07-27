import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-forum');
}

export default function OfficialYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-forum" />;
}
