import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-with-trainers-server');
}

export default function Sabrehaven74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-with-trainers-server" />;
}
