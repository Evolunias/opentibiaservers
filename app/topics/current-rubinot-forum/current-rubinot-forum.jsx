import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-forum');
}

export default function CurrentRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-forum" />;
}
