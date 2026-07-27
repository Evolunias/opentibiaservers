import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-north-america');
}

export default function SerenityCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-north-america" />;
}
