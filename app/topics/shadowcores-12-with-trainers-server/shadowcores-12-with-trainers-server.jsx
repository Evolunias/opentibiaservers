import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-with-trainers-server');
}

export default function Shadowcores12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-with-trainers-server" />;
}
