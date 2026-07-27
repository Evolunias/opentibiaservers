import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvpe-register');
}

export default function Tibia80PvpeRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvpe-register" />;
}
