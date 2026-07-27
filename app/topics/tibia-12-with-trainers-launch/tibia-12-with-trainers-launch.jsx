import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-trainers-launch');
}

export default function Tibia12WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-trainers-launch" />;
}
