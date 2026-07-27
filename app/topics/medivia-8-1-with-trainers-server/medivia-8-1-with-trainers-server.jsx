import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-with-trainers-server');
}

export default function Medivia81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-with-trainers-server" />;
}
