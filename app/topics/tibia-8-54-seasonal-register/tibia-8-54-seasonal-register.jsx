import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-seasonal-register');
}

export default function Tibia854SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-seasonal-register" />;
}
