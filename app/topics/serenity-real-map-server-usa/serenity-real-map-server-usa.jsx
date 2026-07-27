import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-usa');
}

export default function SerenityRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-usa" />;
}
