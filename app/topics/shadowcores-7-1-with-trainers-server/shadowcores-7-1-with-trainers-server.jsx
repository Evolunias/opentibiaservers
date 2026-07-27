import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-with-trainers-server');
}

export default function Shadowcores71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-with-trainers-server" />;
}
