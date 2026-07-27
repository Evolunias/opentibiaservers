import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-open-tibia');
}

export default function HighrateAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-open-tibia" />;
}
