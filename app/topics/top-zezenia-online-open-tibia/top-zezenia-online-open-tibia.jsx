import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-open-tibia');
}

export default function TopZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-open-tibia" />;
}
