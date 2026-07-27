import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-germany');
}

export default function OxygenotCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-germany" />;
}
