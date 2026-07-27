import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-with-trainers-server');
}

export default function Sabrehaven11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-with-trainers-server" />;
}
