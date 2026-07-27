import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-login');
}

export default function HighrateMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-login" />;
}
