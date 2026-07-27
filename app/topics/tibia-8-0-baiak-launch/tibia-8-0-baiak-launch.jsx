import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-launch');
}

export default function Tibia80BaiakLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-launch" />;
}
