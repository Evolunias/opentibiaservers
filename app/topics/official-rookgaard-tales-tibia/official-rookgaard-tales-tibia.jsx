import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-tibia');
}

export default function OfficialRookgaardTalesTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-tibia" />;
}
