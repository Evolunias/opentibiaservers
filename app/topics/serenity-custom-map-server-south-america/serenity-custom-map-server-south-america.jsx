import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-south-america');
}

export default function SerenityCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-south-america" />;
}
