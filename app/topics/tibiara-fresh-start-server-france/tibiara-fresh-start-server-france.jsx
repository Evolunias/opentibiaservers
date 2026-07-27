import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-france');
}

export default function TibiaraFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-france" />;
}
