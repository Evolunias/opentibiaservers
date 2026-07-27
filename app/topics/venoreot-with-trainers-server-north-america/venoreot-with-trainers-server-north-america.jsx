import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-north-america');
}

export default function VenoreotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-north-america" />;
}
