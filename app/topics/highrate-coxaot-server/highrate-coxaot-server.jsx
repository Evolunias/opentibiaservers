import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-server');
}

export default function HighrateCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-server" />;
}
