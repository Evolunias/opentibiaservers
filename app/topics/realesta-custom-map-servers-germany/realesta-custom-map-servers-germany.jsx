import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-servers-germany');
}

export default function RealestaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-servers-germany" />;
}
