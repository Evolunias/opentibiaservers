import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-with-trainers-server');
}

export default function Shadowcores14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-with-trainers-server" />;
}
