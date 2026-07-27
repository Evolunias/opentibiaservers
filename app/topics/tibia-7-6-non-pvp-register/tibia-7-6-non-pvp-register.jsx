import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-non-pvp-register');
}

export default function Tibia76NonPvpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-non-pvp-register" />;
}
