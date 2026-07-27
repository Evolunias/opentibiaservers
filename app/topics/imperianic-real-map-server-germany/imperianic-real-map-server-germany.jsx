import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-germany');
}

export default function ImperianicRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-germany" />;
}
