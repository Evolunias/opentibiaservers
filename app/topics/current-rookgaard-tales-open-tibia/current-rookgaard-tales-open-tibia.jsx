import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-open-tibia');
}

export default function CurrentRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-open-tibia" />;
}
