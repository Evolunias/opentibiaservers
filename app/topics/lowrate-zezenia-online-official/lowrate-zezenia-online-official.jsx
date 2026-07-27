import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-official');
}

export default function LowrateZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-official" />;
}
