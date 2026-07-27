import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-latin-america-server');
}

export default function TibiaraLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-latin-america-server" />;
}
