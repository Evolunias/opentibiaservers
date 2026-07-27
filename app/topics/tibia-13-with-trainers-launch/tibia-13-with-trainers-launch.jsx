import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-launch');
}

export default function Tibia13WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-launch" />;
}
