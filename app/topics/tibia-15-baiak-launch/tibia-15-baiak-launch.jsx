import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-launch');
}

export default function Tibia15BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-launch" />;
}
