import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-open-tibia');
}

export default function ActiveZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-open-tibia" />;
}
