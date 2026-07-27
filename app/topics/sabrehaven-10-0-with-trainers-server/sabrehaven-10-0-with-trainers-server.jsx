import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-with-trainers-server');
}

export default function Sabrehaven100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-with-trainers-server" />;
}
