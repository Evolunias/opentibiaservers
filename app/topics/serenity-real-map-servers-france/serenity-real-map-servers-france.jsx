import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-france');
}

export default function SerenityRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-france" />;
}
