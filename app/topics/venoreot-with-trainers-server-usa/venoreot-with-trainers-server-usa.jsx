import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-usa');
}

export default function VenoreotWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-usa" />;
}
