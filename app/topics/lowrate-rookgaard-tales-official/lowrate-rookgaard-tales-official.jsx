import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-official');
}

export default function LowrateRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-official" />;
}
