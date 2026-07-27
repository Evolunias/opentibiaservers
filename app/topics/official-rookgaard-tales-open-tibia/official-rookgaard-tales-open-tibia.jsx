import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-open-tibia');
}

export default function OfficialRookgaardTalesOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-open-tibia" />;
}
