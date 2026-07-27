import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-rookgaard-tales-server');
}

export default function NonPvpRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-rookgaard-tales-server" />;
}
