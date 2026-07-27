import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-launch');
}

export default function Tibia1098BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-launch" />;
}
