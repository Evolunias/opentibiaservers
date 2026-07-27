import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-tibia');
}

export default function FreshStartRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-tibia" />;
}
