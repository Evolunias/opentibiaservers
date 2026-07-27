import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-seasonal-register');
}

export default function Tibia86SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-seasonal-register" />;
}
