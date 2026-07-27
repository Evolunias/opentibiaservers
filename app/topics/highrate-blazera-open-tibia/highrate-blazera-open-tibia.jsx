import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-open-tibia');
}

export default function HighrateBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-open-tibia" />;
}
