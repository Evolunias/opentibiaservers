import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-poland');
}

export default function VenoreotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-poland" />;
}
