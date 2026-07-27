import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-tibia');
}

export default function TopRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-tibia" />;
}
