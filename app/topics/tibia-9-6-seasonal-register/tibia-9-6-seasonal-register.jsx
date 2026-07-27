import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-register');
}

export default function Tibia96SeasonalRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-register" />;
}
