import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-register');
}

export default function Tibia84SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-register" />;
}
