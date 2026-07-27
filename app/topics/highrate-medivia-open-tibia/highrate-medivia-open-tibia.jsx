import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-open-tibia');
}

export default function HighrateMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-open-tibia" />;
}
