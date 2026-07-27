import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-with-trainers-server');
}

export default function Ameria80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-with-trainers-server" />;
}
