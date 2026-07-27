import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-tibia');
}

export default function NewSeasonRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-tibia" />;
}
