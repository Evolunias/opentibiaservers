import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-open-tibia');
}

export default function HighrateRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-open-tibia" />;
}
