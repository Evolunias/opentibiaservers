import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-0-with-trainers-server');
}

export default function Thornia80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-0-with-trainers-server" />;
}
