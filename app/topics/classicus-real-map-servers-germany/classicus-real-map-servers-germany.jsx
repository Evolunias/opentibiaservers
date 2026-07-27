import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-germany');
}

export default function ClassicusRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-germany" />;
}
