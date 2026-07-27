import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-south-america');
}

export default function SerenityCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-south-america" />;
}
