import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-north-america');
}

export default function CarlinotLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-north-america" />;
}
