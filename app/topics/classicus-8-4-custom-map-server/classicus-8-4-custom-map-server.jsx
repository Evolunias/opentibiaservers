import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-custom-map-server');
}

export default function Classicus84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-custom-map-server" />;
}
