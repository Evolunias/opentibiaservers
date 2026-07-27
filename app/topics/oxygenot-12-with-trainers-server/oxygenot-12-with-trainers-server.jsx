import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-with-trainers-server');
}

export default function Oxygenot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-with-trainers-server" />;
}
