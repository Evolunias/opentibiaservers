import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-poland-server');
}

export default function CarlinotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-poland-server" />;
}
