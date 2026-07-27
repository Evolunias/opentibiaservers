import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-with-trainers-server');
}

export default function Blazera96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-with-trainers-server" />;
}
