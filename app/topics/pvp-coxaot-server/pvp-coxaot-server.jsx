import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-coxaot-server');
}

export default function PvpCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-coxaot-server" />;
}
