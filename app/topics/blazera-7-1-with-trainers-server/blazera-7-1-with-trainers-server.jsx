import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-with-trainers-server');
}

export default function Blazera71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-with-trainers-server" />;
}
