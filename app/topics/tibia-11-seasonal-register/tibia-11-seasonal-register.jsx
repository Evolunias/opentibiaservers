import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-register');
}

export default function Tibia11SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-register" />;
}
