import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-south-america');
}

export default function UnlineCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-south-america" />;
}
