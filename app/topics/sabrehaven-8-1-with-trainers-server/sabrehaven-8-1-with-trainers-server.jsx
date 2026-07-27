import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-with-trainers-server');
}

export default function Sabrehaven81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-with-trainers-server" />;
}
