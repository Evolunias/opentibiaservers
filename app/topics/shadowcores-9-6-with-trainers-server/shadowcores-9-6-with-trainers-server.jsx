import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-with-trainers-server');
}

export default function Shadowcores96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-with-trainers-server" />;
}
