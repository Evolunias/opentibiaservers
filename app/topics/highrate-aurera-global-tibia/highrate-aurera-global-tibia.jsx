import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-tibia');
}

export default function HighrateAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-tibia" />;
}
