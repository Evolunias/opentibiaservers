import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle');
}

export default function HighrateMiracleKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle" />;
}
