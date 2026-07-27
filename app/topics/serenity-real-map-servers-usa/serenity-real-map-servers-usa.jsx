import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-servers-usa');
}

export default function SerenityRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-servers-usa" />;
}
