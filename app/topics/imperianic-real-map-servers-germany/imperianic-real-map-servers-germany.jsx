import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-germany');
}

export default function ImperianicRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-germany" />;
}
