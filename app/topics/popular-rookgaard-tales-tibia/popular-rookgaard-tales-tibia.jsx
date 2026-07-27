import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-tibia');
}

export default function PopularRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-tibia" />;
}
