import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-open-tibia');
}

export default function LowrateRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-open-tibia" />;
}
