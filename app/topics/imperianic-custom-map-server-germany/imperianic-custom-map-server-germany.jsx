import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-germany');
}

export default function ImperianicCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-germany" />;
}
