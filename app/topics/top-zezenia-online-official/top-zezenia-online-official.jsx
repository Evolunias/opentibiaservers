import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-official');
}

export default function TopZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-official" />;
}
