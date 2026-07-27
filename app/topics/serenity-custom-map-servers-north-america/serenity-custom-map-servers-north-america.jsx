import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-north-america');
}

export default function SerenityCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-north-america" />;
}
