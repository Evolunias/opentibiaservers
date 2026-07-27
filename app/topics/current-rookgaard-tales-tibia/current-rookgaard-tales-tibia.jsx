import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-tibia');
}

export default function CurrentRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-tibia" />;
}
