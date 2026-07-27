import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-germany');
}

export default function AlasteraRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-germany" />;
}
