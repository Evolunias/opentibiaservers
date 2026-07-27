import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-open-tibia');
}

export default function HighrateRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-open-tibia" />;
}
