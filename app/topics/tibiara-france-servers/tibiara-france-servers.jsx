import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-france-servers');
}

export default function TibiaraFranceServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-france-servers" />;
}
