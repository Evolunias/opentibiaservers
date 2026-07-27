import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-uk');
}

export default function VenoreotWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-uk" />;
}
