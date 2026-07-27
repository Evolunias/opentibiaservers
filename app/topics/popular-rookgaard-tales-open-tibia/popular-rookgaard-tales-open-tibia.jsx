import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-open-tibia');
}

export default function PopularRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-open-tibia" />;
}
