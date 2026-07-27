import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-trainers-launch');
}

export default function Tibia772WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-trainers-launch" />;
}
