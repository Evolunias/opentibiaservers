import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-open-tibia');
}

export default function BestRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-open-tibia" />;
}
