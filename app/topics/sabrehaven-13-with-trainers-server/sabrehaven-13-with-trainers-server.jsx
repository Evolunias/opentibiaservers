import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-with-trainers-server');
}

export default function Sabrehaven13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-with-trainers-server" />;
}
