import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-forum');
}

export default function FreshStartRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-forum" />;
}
