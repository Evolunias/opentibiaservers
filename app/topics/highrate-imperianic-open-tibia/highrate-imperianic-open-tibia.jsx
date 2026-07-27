import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-open-tibia');
}

export default function HighrateImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-open-tibia" />;
}
