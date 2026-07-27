import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-custom-map-server');
}

export default function Classicus12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-custom-map-server" />;
}
