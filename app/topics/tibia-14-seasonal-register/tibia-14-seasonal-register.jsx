import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-register');
}

export default function Tibia14SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-register" />;
}
