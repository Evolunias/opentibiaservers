import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-with-trainers-server');
}

export default function Blazera15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-with-trainers-server" />;
}
