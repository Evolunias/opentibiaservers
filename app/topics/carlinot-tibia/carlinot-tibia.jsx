import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-tibia');
}

export default function CarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-tibia" />;
}
