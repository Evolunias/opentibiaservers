import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-custom-map-server');
}

export default function Classicus14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-custom-map-server" />;
}
