import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-germany-server');
}

export default function CarlinotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-germany-server" />;
}
