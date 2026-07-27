import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-rookgaard-tales-server');
}

export default function PvpEnforcedRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-rookgaard-tales-server" />;
}
