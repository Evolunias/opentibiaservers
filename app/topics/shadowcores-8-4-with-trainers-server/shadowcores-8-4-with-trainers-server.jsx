import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-with-trainers-server');
}

export default function Shadowcores84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-with-trainers-server" />;
}
