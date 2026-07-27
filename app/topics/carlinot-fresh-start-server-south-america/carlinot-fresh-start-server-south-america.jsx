import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-south-america');
}

export default function CarlinotFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-south-america" />;
}
