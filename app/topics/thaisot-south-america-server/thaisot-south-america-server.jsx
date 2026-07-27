import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-south-america-server');
}

export default function ThaisotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-south-america-server" />;
}
