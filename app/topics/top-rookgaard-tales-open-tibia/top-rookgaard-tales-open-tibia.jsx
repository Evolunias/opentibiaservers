import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-open-tibia');
}

export default function TopRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-open-tibia" />;
}
