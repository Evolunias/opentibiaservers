import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-with-trainers-server');
}

export default function Sabrehaven14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-with-trainers-server" />;
}
