import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-latin-america');
}

export default function SerenityCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-latin-america" />;
}
