import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-client');
}

export default function LowrateMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-client" />;
}
