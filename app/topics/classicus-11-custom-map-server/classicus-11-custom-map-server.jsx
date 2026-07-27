import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-custom-map-server');
}

export default function Classicus11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-custom-map-server" />;
}
