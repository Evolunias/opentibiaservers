import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-south-america-servers');
}

export default function ThaisotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-south-america-servers" />;
}
