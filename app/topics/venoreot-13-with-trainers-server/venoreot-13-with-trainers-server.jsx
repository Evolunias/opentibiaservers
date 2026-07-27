import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-with-trainers-server');
}

export default function Venoreot13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-with-trainers-server" />;
}
