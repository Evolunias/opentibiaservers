import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-custom-map-server');
}

export default function Classicus71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-custom-map-server" />;
}
