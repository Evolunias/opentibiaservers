import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-trainers-launch');
}

export default function Tibia80WithTrainersLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-trainers-launch" />;
}
