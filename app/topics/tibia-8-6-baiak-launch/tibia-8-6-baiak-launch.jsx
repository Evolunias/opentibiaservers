import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-launch');
}

export default function Tibia86BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-launch" />;
}
