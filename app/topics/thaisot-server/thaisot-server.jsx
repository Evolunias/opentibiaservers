import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-server');
}

export default function ThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-server" />;
}
