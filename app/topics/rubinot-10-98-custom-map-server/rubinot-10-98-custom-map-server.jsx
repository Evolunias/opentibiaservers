import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-custom-map-server');
}

export default function Rubinot1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-custom-map-server" />;
}
