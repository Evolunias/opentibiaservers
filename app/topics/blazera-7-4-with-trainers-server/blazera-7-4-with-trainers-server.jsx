import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-with-trainers-server');
}

export default function Blazera74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-with-trainers-server" />;
}
