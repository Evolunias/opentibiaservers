import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-north-america-servers');
}

export default function ThaisotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-north-america-servers" />;
}
