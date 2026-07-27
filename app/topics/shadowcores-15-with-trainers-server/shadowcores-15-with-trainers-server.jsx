import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-with-trainers-server');
}

export default function Shadowcores15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-with-trainers-server" />;
}
