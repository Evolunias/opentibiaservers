import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-sweden-servers');
}

export default function CarlinotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-sweden-servers" />;
}
