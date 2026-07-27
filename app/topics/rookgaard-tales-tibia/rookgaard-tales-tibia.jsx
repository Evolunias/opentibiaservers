import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-tibia');
}

export default function RookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-tibia" />;
}
