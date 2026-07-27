import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-argentina-servers');
}

export default function CarlinotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-argentina-servers" />;
}
