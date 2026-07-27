import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-coxaot-client');
}

export default function HighrateCoxaotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-coxaot-client" />;
}
