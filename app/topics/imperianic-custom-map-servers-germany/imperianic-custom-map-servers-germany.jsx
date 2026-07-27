import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-germany');
}

export default function ImperianicCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-germany" />;
}
