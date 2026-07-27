import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-online');
}

export default function LowrateZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-online" />;
}
