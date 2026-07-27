import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia');
}

export default function HighrateMediviaKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia" />;
}
