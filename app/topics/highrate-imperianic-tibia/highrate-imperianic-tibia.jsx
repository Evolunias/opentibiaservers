import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-tibia');
}

export default function HighrateImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-tibia" />;
}
