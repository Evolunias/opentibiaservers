import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-north-america-servers');
}

export default function TibiaraNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-north-america-servers" />;
}
