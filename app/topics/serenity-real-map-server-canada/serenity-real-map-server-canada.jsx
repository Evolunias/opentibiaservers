import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-canada');
}

export default function SerenityRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-canada" />;
}
