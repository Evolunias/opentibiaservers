import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-forum');
}

export default function LowrateRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-forum" />;
}
