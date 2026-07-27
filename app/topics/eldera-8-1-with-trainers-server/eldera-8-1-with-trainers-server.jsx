import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-with-trainers-server');
}

export default function Eldera81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-with-trainers-server" />;
}
