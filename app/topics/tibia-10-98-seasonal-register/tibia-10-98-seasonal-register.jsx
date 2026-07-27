import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-seasonal-register');
}

export default function Tibia1098SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-seasonal-register" />;
}
