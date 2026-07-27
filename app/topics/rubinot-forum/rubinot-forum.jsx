import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-forum');
}

export default function RubinotForumKeywordPage() {
  return <StaticKeywordPage slug="rubinot-forum" />;
}
