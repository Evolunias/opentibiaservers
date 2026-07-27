import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-canada-servers');
}

export default function TibiaraCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-canada-servers" />;
}
