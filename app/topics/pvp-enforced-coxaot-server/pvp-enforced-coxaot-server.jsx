import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-coxaot-server');
}

export default function PvpEnforcedCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-coxaot-server" />;
}
