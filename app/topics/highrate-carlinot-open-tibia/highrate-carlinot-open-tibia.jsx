import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-open-tibia');
}

export default function HighrateCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-open-tibia" />;
}
