import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-with-trainers-server');
}

export default function Shadowcores13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-with-trainers-server" />;
}
