import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-germany');
}

export default function UnlineCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-germany" />;
}
