import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-usa');
}

export default function SerenityCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-usa" />;
}
