import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-mexico');
}

export default function SerenityRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-mexico" />;
}
