import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-open-tibia');
}

export default function BestZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-open-tibia" />;
}
