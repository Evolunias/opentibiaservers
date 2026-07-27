import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-seasonal-register');
}

export default function Tibia81SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-seasonal-register" />;
}
