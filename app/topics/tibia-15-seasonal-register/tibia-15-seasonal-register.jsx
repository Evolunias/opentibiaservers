import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-register');
}

export default function Tibia15SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-register" />;
}
