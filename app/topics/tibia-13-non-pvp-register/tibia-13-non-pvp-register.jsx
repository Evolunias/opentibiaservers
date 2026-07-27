import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-register');
}

export default function Tibia13NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-register" />;
}
