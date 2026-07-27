import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-launch');
}

export default function Tibia100BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-launch" />;
}
