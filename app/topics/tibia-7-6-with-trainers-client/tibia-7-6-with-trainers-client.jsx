import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-client');
}

export default function Tibia76WithTrainersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-client" />;
}
