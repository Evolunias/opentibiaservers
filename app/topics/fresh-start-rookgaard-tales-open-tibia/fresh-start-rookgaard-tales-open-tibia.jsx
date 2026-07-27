import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-open-tibia');
}

export default function FreshStartRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-open-tibia" />;
}
