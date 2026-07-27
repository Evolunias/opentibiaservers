import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-launch');
}

export default function Tibia12BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-launch" />;
}
