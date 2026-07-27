import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-canada-server');
}

export default function ThaisotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-canada-server" />;
}
