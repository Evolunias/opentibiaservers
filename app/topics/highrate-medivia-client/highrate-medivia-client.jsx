import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-client');
}

export default function HighrateMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-client" />;
}
