import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-launch');
}

export default function Tibia96BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-launch" />;
}
