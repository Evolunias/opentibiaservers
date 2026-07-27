import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-latin-america');
}

export default function VenoreotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-latin-america" />;
}
