import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-tibia');
}

export default function BestRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-tibia" />;
}
