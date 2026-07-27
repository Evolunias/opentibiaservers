import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-north-america');
}

export default function SerenityRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-north-america" />;
}
