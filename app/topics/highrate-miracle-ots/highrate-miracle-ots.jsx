import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-ots');
}

export default function HighrateMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-ots" />;
}
