import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-europe-servers');
}

export default function TibiaraEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-europe-servers" />;
}
