import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-with-trainers-server');
}

export default function Sabrehaven84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-with-trainers-server" />;
}
