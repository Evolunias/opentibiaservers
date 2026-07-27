import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-south-america-server');
}

export default function TibiaraSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-south-america-server" />;
}
