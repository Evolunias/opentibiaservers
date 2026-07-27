import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-with-trainers-server');
}

export default function Sabrehaven15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-with-trainers-server" />;
}
