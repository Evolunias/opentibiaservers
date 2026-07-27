import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-trainers-client');
}

export default function Tibia854WithTrainersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-trainers-client" />;
}
