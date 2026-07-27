import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-servers-argentina');
}

export default function SerenityCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-servers-argentina" />;
}
