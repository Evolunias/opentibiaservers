import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-chile-servers');
}

export default function CarlinotChileServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-chile-servers" />;
}
