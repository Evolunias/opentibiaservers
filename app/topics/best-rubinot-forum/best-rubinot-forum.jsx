import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-forum');
}

export default function BestRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-forum" />;
}
