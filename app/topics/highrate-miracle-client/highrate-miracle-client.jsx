import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-client');
}

export default function HighrateMiracleClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-client" />;
}
