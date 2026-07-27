import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-custom-map-server');
}

export default function Classicus13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-custom-map-server" />;
}
