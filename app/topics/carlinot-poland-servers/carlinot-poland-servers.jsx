import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-poland-servers');
}

export default function CarlinotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-poland-servers" />;
}
