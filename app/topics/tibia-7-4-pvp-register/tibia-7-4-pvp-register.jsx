import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-register');
}

export default function Tibia74PvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-register" />;
}
