import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-open-tibia');
}

export default function LowrateZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-open-tibia" />;
}
