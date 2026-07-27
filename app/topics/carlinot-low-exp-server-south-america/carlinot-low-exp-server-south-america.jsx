import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-south-america');
}

export default function CarlinotLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-south-america" />;
}
