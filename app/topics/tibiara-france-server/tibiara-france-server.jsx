import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-france-server');
}

export default function TibiaraFranceServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-france-server" />;
}
