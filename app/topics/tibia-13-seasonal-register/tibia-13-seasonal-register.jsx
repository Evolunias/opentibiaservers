import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-seasonal-register');
}

export default function Tibia13SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-seasonal-register" />;
}
