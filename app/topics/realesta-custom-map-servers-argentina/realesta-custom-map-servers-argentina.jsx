import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-argentina');
}

export default function RealestaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-argentina" />;
}
