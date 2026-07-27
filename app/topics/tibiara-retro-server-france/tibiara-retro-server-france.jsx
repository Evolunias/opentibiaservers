import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-retro-server-france');
}

export default function TibiaraRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-retro-server-france" />;
}
