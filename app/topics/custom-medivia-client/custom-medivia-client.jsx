import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-client');
}

export default function CustomMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-client" />;
}
