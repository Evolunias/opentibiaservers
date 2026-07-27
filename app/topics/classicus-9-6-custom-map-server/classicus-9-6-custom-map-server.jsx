import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-custom-map-server');
}

export default function Classicus96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-custom-map-server" />;
}
