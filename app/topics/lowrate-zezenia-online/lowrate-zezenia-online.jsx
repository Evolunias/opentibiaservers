import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online');
}

export default function LowrateZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online" />;
}
