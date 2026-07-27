import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-argentina');
}

export default function OxygenotWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-argentina" />;
}
