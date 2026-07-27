import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-forum');
}

export default function OfficialRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-forum" />;
}
