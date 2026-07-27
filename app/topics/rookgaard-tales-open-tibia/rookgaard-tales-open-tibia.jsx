import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-open-tibia');
}

export default function RookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-open-tibia" />;
}
