import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-with-trainers-server');
}

export default function Blazera81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-with-trainers-server" />;
}
