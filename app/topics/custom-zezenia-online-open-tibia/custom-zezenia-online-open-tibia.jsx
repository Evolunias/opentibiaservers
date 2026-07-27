import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-open-tibia');
}

export default function CustomZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-open-tibia" />;
}
