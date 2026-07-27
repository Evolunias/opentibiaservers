import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-client');
}

export default function FreshStartMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-client" />;
}
