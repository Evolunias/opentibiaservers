import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-tibia');
}

export default function HighrateRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-tibia" />;
}
