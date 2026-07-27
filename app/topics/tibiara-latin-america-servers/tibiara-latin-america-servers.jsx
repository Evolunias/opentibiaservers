import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-latin-america-servers');
}

export default function TibiaraLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-latin-america-servers" />;
}
