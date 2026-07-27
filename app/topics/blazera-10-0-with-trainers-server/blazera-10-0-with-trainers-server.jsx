import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-with-trainers-server');
}

export default function Blazera100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-with-trainers-server" />;
}
