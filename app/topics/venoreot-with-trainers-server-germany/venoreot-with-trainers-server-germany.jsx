import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-germany');
}

export default function VenoreotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-germany" />;
}
