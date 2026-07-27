import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-sweden');
}

export default function SerenityRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-sweden" />;
}
