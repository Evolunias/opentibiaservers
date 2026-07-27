import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-open-tibia');
}

export default function FreshStartZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-open-tibia" />;
}
