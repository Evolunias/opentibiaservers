import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-open-tibia');
}

export default function HighrateZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-open-tibia" />;
}
