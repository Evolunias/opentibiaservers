import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-sabrehaven-server');
}

export default function PvpSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-sabrehaven-server" />;
}
