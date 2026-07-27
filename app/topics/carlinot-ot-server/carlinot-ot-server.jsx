import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-ot-server');
}

export default function CarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-ot-server" />;
}
