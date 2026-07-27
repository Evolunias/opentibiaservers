import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-germany');
}

export default function UnlineCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-germany" />;
}
