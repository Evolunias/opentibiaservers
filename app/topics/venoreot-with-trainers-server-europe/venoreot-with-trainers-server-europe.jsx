import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-europe');
}

export default function VenoreotWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-europe" />;
}
