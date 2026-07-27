import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-open-tibia');
}

export default function CarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-open-tibia" />;
}
