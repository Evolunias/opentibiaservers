import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-official');
}

export default function PopularZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-official" />;
}
