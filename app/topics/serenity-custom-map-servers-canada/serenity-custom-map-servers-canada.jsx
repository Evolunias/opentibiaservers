import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-canada');
}

export default function SerenityCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-canada" />;
}
