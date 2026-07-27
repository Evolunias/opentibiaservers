import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-register');
}

export default function Tibia71SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-register" />;
}
