import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-with-trainers-server');
}

export default function Medivia13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-with-trainers-server" />;
}
