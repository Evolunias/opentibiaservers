import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-tibia');
}

export default function HighrateZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-tibia" />;
}
