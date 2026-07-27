import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-open-tibia');
}

export default function CurrentZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-open-tibia" />;
}
