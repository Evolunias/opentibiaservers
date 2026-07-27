import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-trainers-launch');
}

export default function Tibia100WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-trainers-launch" />;
}
