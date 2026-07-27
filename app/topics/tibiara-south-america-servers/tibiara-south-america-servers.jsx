import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-south-america-servers');
}

export default function TibiaraSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-south-america-servers" />;
}
