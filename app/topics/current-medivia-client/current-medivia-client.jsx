import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-client');
}

export default function CurrentMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-client" />;
}
