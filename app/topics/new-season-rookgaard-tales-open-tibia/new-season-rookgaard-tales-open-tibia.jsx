import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-open-tibia');
}

export default function NewSeasonRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-open-tibia" />;
}
