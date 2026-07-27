import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-forum');
}

export default function NewSeasonRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-forum" />;
}
