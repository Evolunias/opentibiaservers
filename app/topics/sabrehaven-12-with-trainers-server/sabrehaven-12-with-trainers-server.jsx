import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-with-trainers-server');
}

export default function Sabrehaven12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-with-trainers-server" />;
}
