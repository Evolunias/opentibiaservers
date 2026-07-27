import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-chile-server');
}

export default function CarlinotChileServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-chile-server" />;
}
