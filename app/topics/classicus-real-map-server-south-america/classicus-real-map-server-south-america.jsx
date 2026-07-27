import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-server-south-america');
}

export default function ClassicusRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-server-south-america" />;
}
