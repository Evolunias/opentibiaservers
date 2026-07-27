import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-south-america');
}

export default function ClassicusRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-south-america" />;
}
