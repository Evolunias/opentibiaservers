import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-launch');
}

export default function Tibia11BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-launch" />;
}
