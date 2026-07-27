import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-xanteria-server');
}

export default function PvpXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-xanteria-server" />;
}
