import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-official');
}

export default function HighrateRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-official" />;
}
