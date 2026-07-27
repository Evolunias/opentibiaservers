import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-trainers-launch');
}

export default function Tibia84WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-trainers-launch" />;
}
