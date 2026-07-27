import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-server');
}

export default function OfficialRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-server" />;
}
