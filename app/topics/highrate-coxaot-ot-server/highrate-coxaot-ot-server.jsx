import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-ot-server');
}

export default function HighrateCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-ot-server" />;
}
