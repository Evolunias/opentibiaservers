import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-ots');
}

export default function HighrateMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-ots" />;
}
