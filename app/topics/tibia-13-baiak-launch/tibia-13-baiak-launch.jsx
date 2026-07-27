import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-launch');
}

export default function Tibia13BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-launch" />;
}
