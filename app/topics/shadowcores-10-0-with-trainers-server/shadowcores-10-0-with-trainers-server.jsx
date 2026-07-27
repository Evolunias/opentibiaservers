import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-with-trainers-server');
}

export default function Shadowcores100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-with-trainers-server" />;
}
