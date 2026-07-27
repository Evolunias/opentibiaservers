import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-with-trainers-server');
}

export default function Blazera11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-with-trainers-server" />;
}
