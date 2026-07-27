import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-custom-map-server-brazil');
}

export default function SerenityCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-custom-map-server-brazil" />;
}
