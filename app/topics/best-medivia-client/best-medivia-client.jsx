import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-client');
}

export default function BestMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-client" />;
}
