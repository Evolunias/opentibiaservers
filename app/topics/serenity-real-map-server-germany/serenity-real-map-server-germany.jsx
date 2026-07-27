import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-real-map-server-germany');
}

export default function SerenityRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-real-map-server-germany" />;
}
