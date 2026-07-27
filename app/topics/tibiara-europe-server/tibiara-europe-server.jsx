import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-europe-server');
}

export default function TibiaraEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-europe-server" />;
}
