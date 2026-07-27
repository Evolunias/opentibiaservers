import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-launch');
}

export default function Tibia14WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-launch" />;
}
