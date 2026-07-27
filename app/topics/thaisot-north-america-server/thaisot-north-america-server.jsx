import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-north-america-server');
}

export default function ThaisotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-north-america-server" />;
}
