import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-north-america');
}

export default function SerenityRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-north-america" />;
}
