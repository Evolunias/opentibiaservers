import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-germany');
}

export default function OxygenotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-germany" />;
}
