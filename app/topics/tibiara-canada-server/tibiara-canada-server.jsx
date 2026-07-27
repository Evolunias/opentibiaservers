import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-canada-server');
}

export default function TibiaraCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-canada-server" />;
}
