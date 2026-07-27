import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-xanteria-server');
}

export default function PvpEnforcedXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-xanteria-server" />;
}
