import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-latin-america');
}

export default function SerenityRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-latin-america" />;
}
