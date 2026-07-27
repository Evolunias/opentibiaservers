import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-forum');
}

export default function TopRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-forum" />;
}
