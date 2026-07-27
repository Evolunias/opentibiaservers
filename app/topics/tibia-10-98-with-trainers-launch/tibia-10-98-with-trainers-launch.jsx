import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-trainers-launch');
}

export default function Tibia1098WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-trainers-launch" />;
}
