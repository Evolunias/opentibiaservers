import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-france');
}

export default function SerenityRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-france" />;
}
