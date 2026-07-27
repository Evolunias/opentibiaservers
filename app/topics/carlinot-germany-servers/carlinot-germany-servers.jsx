import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-germany-servers');
}

export default function CarlinotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-germany-servers" />;
}
