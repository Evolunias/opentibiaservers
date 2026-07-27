import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-client');
}

export default function Tibia13WithTrainersClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-client" />;
}
