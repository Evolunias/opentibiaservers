import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-latin-america');
}

export default function SerenityCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-latin-america" />;
}
