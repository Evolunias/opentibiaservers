import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-open-tibia');
}

export default function PopularZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-open-tibia" />;
}
