import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-trainers-server');
}

export default function Tibia74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-trainers-server" />;
}
