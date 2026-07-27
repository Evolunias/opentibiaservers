import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-launch');
}

export default function Tibia74BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-launch" />;
}
