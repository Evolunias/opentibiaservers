import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-launch');
}

export default function Tibia854BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-launch" />;
}
