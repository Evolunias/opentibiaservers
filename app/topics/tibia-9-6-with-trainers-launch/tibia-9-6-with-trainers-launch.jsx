import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-launch');
}

export default function Tibia96WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-launch" />;
}
