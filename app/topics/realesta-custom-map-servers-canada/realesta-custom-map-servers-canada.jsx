import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-canada');
}

export default function RealestaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-canada" />;
}
