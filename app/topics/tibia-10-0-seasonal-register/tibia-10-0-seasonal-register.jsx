import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-register');
}

export default function Tibia100SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-register" />;
}
