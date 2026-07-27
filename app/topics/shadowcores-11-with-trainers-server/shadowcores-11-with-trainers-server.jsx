import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-with-trainers-server');
}

export default function Shadowcores11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-with-trainers-server" />;
}
