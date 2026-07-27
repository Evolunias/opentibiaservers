import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-south-america');
}

export default function SerenityRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-south-america" />;
}
