import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-mexico');
}

export default function SerenityRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-mexico" />;
}
