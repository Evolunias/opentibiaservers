import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-with-trainers-server');
}

export default function Sabrehaven71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-with-trainers-server" />;
}
