import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-launch');
}

export default function Tibia76BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-launch" />;
}
