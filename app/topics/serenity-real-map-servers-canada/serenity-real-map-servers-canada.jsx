import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-canada');
}

export default function SerenityRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-canada" />;
}
