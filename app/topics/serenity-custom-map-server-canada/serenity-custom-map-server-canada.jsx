import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-canada');
}

export default function SerenityCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-canada" />;
}
