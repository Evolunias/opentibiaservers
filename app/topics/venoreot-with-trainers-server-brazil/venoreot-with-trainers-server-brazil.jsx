import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-brazil');
}

export default function VenoreotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-brazil" />;
}
