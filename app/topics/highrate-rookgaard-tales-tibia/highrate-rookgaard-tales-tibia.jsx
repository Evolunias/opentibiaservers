import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-tibia');
}

export default function HighrateRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-tibia" />;
}
