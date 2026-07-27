import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-argentina');
}

export default function SerenityCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-argentina" />;
}
