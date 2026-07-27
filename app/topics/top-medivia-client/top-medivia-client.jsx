import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-client');
}

export default function TopMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-client" />;
}
