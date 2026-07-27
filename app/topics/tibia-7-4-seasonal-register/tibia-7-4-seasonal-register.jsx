import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-register');
}

export default function Tibia74SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-register" />;
}
