import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-with-trainers-server');
}

export default function Blazera84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-with-trainers-server" />;
}
