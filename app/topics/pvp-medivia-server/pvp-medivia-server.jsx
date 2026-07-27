import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-medivia-server');
}

export default function PvpMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-medivia-server" />;
}
