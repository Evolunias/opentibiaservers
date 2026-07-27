import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-server');
}

export default function HighrateMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-server" />;
}
