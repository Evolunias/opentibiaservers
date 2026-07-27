import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-with-trainers-server');
}

export default function Sabrehaven86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-with-trainers-server" />;
}
