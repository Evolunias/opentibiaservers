import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-trainers-launch');
}

export default function Tibia86WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-trainers-launch" />;
}
