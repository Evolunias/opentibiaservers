import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-open-tibia');
}

export default function NewZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-open-tibia" />;
}
