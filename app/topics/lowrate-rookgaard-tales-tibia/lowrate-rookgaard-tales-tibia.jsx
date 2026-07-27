import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-tibia');
}

export default function LowrateRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-tibia" />;
}
