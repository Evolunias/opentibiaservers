import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-launch');
}

export default function Tibia84BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-launch" />;
}
