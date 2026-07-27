import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-launch');
}

export default function Tibia14BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-launch" />;
}
