import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-rookgaard-tales-server');
}

export default function PvpRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-rookgaard-tales-server" />;
}
