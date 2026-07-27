import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-launch');
}

export default function Tibia76WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-launch" />;
}
