import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-launch');
}

export default function Tibia13ServerLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-launch" />;
}
