import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-canada');
}

export default function UnlineCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-canada" />;
}
