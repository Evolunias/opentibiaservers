import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-client');
}

export default function OfficialRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-client" />;
}
