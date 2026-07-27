import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-argentina');
}

export default function SerenityRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-argentina" />;
}
