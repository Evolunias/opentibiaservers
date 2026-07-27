import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-with-trainers-server-argentina');
}

export default function VenoreotWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-with-trainers-server-argentina" />;
}
