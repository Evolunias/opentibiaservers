import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-launch');
}

export default function Tibia15WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-launch" />;
}
