import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-client');
}

export default function Tibia11WithTrainersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-client" />;
}
