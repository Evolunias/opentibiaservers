import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-with-trainers-server');
}

export default function Blazera12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-with-trainers-server" />;
}
