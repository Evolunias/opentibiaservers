import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-tibia');
}

export default function HighrateCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-tibia" />;
}
