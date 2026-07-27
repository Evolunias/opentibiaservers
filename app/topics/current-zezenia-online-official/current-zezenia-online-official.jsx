import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-official');
}

export default function CurrentZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-official" />;
}
