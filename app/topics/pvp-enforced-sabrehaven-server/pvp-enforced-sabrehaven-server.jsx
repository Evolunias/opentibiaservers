import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-sabrehaven-server');
}

export default function PvpEnforcedSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-sabrehaven-server" />;
}
