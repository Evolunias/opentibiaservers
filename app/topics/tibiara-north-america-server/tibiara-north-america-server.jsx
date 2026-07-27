import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-north-america-server');
}

export default function TibiaraNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-north-america-server" />;
}
