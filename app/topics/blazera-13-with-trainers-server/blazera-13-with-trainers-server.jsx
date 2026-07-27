import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-with-trainers-server');
}

export default function Blazera13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-with-trainers-server" />;
}
