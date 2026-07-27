import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-launch');
}

export default function Tibia11WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-launch" />;
}
