import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-forum');
}

export default function LowrateZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-forum" />;
}
